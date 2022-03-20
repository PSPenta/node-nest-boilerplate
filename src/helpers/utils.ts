/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable class-methods-use-this */
import { ResponseObj } from './utils.interface';

// eslint-disable-next-line import/prefer-default-export
export class Utils {
  checkIfDataExists(data: any): boolean {
    let flagDataExists;
    if (data === 0 ? '0' : data) {
      switch (data.constructor) {
        case Object:
          flagDataExists = !!Object.keys(data).length;
          break;

        case Array:
          flagDataExists = !!data.length;
          break;

        default:
          flagDataExists = true;
          break;
      }

      if (flagDataExists) {
        return true;
      }
      return false;
    }
    return false;
  }

  responseMsg(
    errMsg: string,
    successStatus?: boolean,
    data?: any,
    paginated?: boolean
  ): any {
    const responseObj: ResponseObj = {
      success: successStatus || false,
      error: errMsg || null,
      data: data || null
    };

    if (errMsg) {
      return responseObj;
    }

    if (paginated) {
      responseObj.data = data.docs || data;
      responseObj.page = data.page || 1;
      responseObj.totalDocs = data.totalDocs || data.total;
      responseObj.limit = data.limit;
      responseObj.totalPages = data.totalPages || data.pages;
      responseObj.hasPrevPage = data.hasPrevPage || data.page > 1;
      responseObj.hasNextPage =
        data.hasNextPage || !!(!data.page || data.page < data.pages);
      responseObj.prevPage =
        data.prevPage || (data.page > 1 ? data.page - 1 : null);
      responseObj.nextPage =
        data.nextPage ||
        (!data.page || data.page < data.pages ? data.page || 2 : null);
    } else {
      responseObj.data = data.docs || data;
    }

    return responseObj;
  }
}
