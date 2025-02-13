import { Injectable } from '@nestjs/common';
import { Model, FilterQuery, PopulateOptions } from 'mongoose';

@Injectable()
export class AbstractQuriesService {
  // async checkUniqueness(repository, columnName: any) {
  //   const result = await repository.findOne({ where: columnName });
  //   return result;
  // }

  // async saveRecord(repository, columns) {
  //   return await repository.save(columns);
  // }

  async findAll(
    model: Model<any>, // Replace 'any' with the appropriate type for your model
    limit: number,
    search: string,
    page: number,
    fields: any,
    filter: FilterQuery<any>, // Replace 'any' with the appropriate type for your model
    populateOptions?: PopulateOptions[],
  ): Promise<any> {
    const query = search
      ? fields.length > 0
        ? {
            $and: [
              filter,
              {
                $or: fields.map((field) => ({
                  [field]: { $regex: search, $options: 'i' },
                })),
              },
            ],
          }
        : filter
      : filter;
    const count = await model.countDocuments(query);
    const totalPages = Math.ceil(count / limit);
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const skip = Math.max(0, (currentPage - 1) * limit);

    let queryBuilder = model.find(query);

    if (populateOptions && populateOptions.length > 0) {
      populateOptions.forEach((options) => {
        queryBuilder = queryBuilder.populate(options);
      });
    }

    const results = await queryBuilder
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    return { results, totalDocuments: count, currentPage, totalPages, limit };
  }
}
