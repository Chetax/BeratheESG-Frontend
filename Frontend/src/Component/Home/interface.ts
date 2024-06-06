export interface DataType {
    key: string;
    name: string;
    type: string;
    supplier: number;
    score: number;
    risk: string;
    status: string;
    result: string | undefined;
    action: undefined;
  }

  
export interface TrackerData {
    month: string;
    status: string;
    completion: string;
    business: string;
  }
