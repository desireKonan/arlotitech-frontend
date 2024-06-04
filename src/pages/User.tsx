import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import useFetch from '../util/useFetch';

interface UserProps {
  users: any[];
}

const User = () => {
  const { data: users, error, loading } = useFetch<any[]>('/v1/user', []);
  
  if(error) {
    return <div> Error: { error } </div>;
  }

  if(loading) {
    return <div> Loading... </div>
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        {/* <!-- ====== User Section Start ====== --> */}
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Users
          </h4>

          <button className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Créer un utilisateur
          </button>

          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Id
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Name 
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Email
                </h5>
              </div>
            </div>

            {users.map((user, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${
                  key === users.length - 1
                    ? ''
                    : 'border-b border-stroke dark:border-strokedark'
                }`}
                key={key}
              >
                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">{user.id}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{user.name}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{user.email}</p>
                </div>
              </div>
            ))}
          </div>        
        </div>
        {/* <!-- ====== User Section End ====== --> */}
      </div>
    </DefaultLayout>
  );
};

export default User;
