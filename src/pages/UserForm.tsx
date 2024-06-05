import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import axiosServices from "../util/axios";

const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<boolean | null>(null);

  const handleSubmit = (e: FormEvent) => {
    const saveUser = async() => {
        let response = null;
        if(!params.id) {
            response = await axiosServices.post('/v1/user', {
                name: name,
                email: email,
                role: role,
                password: password
              });
        } else {
            response = await axiosServices.put(`/v1/user/${params.id}`, {
                name: name,
                email: email,
                role: role,
                password: password
            });
        }

        if(response.status !== 200) {
            setError(true);
        } else {
            setError(false);
        }
    }

    e.preventDefault();
    saveUser();
  }

  useEffect(() => {
    if(params.id) {
        setName(location.state.name);
        setEmail(location.state.email);
        setRole(location.state.role);
    }
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="User Form" />

      <div className="flex flex-col gap-10">
        {/* <!-- ====== User Section Start ====== --> */}
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="grid justify-items-stretch grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-2 col-span-2">
              <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                User Form
              </h4>
            </div>
            <div className="justify-self-end row-span-4 col-span-2">
              <button onClick={() => navigate('/users')} className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Retour
              </button>
            </div>
          </div>
        </div>

        {/* <!-- ====== User Section End ====== --> */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1"> 
            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Create a user
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    placeholder="Select subject"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Role
                                </label>
                                <select
                                    value={role}
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                    }}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                        role ? 'text-black dark:text-white' : ''
                                    }`}
                                >
                                    <option value="" disabled className="text-body dark:text-bodydark">
                                        Select your subject
                                    </option>
                                    <option value="Administrateur" className="text-body dark:text-bodydark">
                                        Administrateur
                                    </option>
                                    <option value="Utilisateur" className="text-body dark:text-bodydark">
                                        Utilisateur
                                    </option>
                                </select>
                            </div>

                            <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UserForm;
