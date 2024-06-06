import { DataType ,TrackerData} from "./interface";
  export const data: DataType[] = [
    {
      key: '1',
      name: 'Assessment 1',
      type: "BRSR",
      supplier: 20,
      score: 0,
      risk: "Medium",
      status: "pending",
      result: undefined,
      action: undefined,
    },
    {
      key: '2',
      name: 'Assessment 2',
      type: "BRSR",
      supplier: 25,
      score: 98,
      risk: "Low",
      status: "complete",
      result: "View",
      action: undefined,
    },
    {
      key: '3',
      name: 'Assessment 3',
      type: "BRSR",
      supplier: 35,
      score: 22,
      risk: "High",
      status: "complete",
      result: "View",
      action: undefined,
    },
    {
      key: '4',
      name: 'Assessment 3',
      type: "Custom",
      supplier: 49,
      score: 23,
      risk: "Medium",
      status: "complete",
      result: "View",
      action: undefined,
    },
    {
      key: '5',
      name: 'Assessment 3',
      type: "Custom",
      supplier: 100,
      score: 42,
      risk: "Medium",
      status: "complete",
      result: "View",
      action: undefined,
    }
  ];
  

  export const trackerData: TrackerData[] = [
    {
      month: "Jan 2023",
      status: "PENDING APPROVAL (1/12)",
      completion: "20%",
      business: "Business Unit 1",
    },
    {
      month: "Feb 2023",
      status: "APPROVED (2/12)",
      completion: "30%",
      business: "Business Unit 1",
    },
    {
      month: "Mar 2023",
      status: "INCOMPLETE (4/12)",
      completion: "50%",
      business: "Business Unit 1",
    },
  ];