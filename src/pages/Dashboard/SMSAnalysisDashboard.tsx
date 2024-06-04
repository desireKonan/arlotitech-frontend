import React, { useCallback } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import SMSAnalysisTable from '../../components/Tables/TableAnalysis';
import useFetch from '../../util/useFetch';
import { ProfitCountry } from '../../models/Profit';
import ProfitChart from '../../components/Charts/ProfitChart';
import SMSAnalysisForm from '../../components/customs/SMSAnalysisForm';

const SMSAnalysisDashboard: React.FC = () => {
  const { data: smsAnalysis, error, loading } = useFetch<ProfitCountry[]>('/v1/profit/countries', []);

  const arraySum = useCallback((data: number[]) => {
    return data.reduce((accumulator, currentValue) => (accumulator) + (currentValue), 0)
  }, []);

  return (
    <DefaultLayout>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <SMSAnalysisForm />
        <div className="col-span-12 xl:col-span-8">
          <SMSAnalysisTable 
            smsAnalysisData={smsAnalysis} 
            error={error} 
            loading={loading} 
          />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <ProfitChart 
            series={smsAnalysis.map(analysis => analysis.profit / arraySum(smsAnalysis.map(analysis => analysis.profit)))}
            colors={['#0FADCF', '#6577F3', '#8FD0EF']}
            labels={smsAnalysis.map(analysis => analysis.country)}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SMSAnalysisDashboard;
