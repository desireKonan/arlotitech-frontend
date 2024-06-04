import { FormEvent, useRef } from "react";
import axiosServices from "../../util/axios";

const SMSAnalysisForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        const postFile = async(data: FormData) => {
          await axiosServices.post('/v1/profit/upload', {
            file: data.get('file')
          }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        }

        e.preventDefault();
        var formData = new FormData();
        const file: any = inputRef.current?.files;
        if(!file[0].name.endsWith('.csv')) {
          throw new Error("Fichier différent du csv !");
        }
        formData.append("file", file[0]);
        postFile(formData); 
    }


    return (
        <div className="col-span-12 xl:col-span-12">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Charger un fichier CSV
              </h3>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-12 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Charger le fichier CSV
                    </label>
                    <input
                        ref={inputRef}
                        type="file"
                        name='csv_file'
                        accept=".csv"
                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Charger le fichier
                </button>
              </div>
            </form>
          </div>
        </div>
    );
}


export default SMSAnalysisForm;