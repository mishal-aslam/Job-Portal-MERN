import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOptions, setSelectedOPtions] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
  };

  const options = [
    { value: "Node.js", label: "Node.js" },
    { value: "React.js", label: "React.js" },
    { value: "Next.js", label: "Next.js" },
    { value: "Express.js", label: "Express.js" },
    { value: "Angular", label: "Angular" },
    { value: "Laravel", label: "Laravel" },
    { value: "Django", label: "Django" },

    { value: "JavaScript", label: "JavaScript" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },

    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },

    { value: "MongoDB", label: "MongoDB" },
    { value: "MySQL", label: "MySQL" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "Firebase", label: "Firebase" },
    { value: "GraphQL", label: "GraphQL" },

    { value: "Git", label: "Git" },
    { value: "GitHub", label: "GitHub" },
  ];

  return (
    <div className="max-w-screen-2xl conatiner mx-auto xl:px-24 px-4">
      {/* form  */}
      <div className="bg-[#fafafa] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  "> Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Company Name</label>
              <input
                type="text"
                placeholder="Google"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value=""> Choose your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly"> Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Karachi"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-24"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value=""> Choose your Experience</option>
                <option value="no experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row  */}
          <div>
            <label className="block mb-2 text-lg  ">Required Skill Sets:</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={selectedOptions}
              onChange={setSelectedOPtions}
              options={options}
              isMulti
            />
          </div>

          {/* 6xth row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Company Logo</label>
              <input
                type="url"
                placeholder="paste your company logo url"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full  ">
              <label className="block mb-2 text-lg  ">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose your Empplyment Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row   */}

          <input
            type="submit"
            className="my-5 block mt-12 bg-blue text-white font-semibold px-8  py-2 rounded-sm "
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
