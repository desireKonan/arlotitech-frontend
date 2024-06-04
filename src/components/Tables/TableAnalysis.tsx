import { ProfitCountry } from '../../models/Profit';

interface SMSAnalysisTableProps {
  smsAnalysisData: ProfitCountry[];

  error: string;

  loading: boolean;
}

const SMSAnalysisTable = ({ smsAnalysisData, error, loading }: SMSAnalysisTableProps) => {

  if(error) {
    return <div> Error: { error } </div>;
  }

  if(loading) {
    return <div> Loading... </div>
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Analysis SMS (By Countries)
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Pays
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Prefix
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5 w-full max-w-96">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
        </div>

        { smsAnalysisData.map((sms, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-5 ${
              key === smsAnalysisData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{sms.country}</p>
            </div>
        
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">+{sms.prefix}</p>
            </div>
        
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{sms.profit} XOF</p>
            </div>
          </div>)
          )      
        }
      </div>
    </div>
  );
};

export default SMSAnalysisTable;
