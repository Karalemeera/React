import React, { useState, useEffect } from 'react';
import img1 from './assets/cloud-FilledHoverstate.svg';
import img2 from './assets/vmw-illu-cross-cloud-services.jpg';



export default function Solutions() {
  const [data, setData] = useState("React Tutorial");
  // const [state, setState] = useAppState();
  // const {
  //   handleSubmit,
  //   register,
  //   watch,
  //   formState: { errors },
  // } = useForm({ defaultValues: state, mode: "onSubmit" });
  // const watchPassword = watch("password");
  // const navigate = useNavigate();

  // const saveData = (data) => {
  //   setState({ ...state, ...data });
  //   navigate("/education");
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://api.example.com/data');
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <div className="clr-row">
        <div className="clr-col-lg-6 clr-col-12">
          <div className="card">
            <h3 className="card-header">{data}</h3>
            <div className="card-block">
              <div className="card-media-block wrap">


                <img src={img1} className="card-media-image" />
                <div className="card-media-description">
                  <span className="card-media-title">Project A</span>
                  <span className="card-media-text">Owner: John Doe</span>
                </div>
              </div>
              <div className="card-text">...</div>
            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-link">Action</button>
            </div>
          </div>
        </div>
        <div className="clr-col-lg-6 clr-col-12">
          <div className="card">
            <h3 className="card-header">Header</h3>
            <div className="card-block">
              <div className="card-media-block wrap">
                <img src={img2} className="card-media-image" />
                <div className="card-media-description">
                  <span className="card-media-title">Project B</span>
                  <span className="card-media-text">Owner: Jane Doe</span>
                </div>
              </div>
              <div className="card-text">...</div>
            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-link">Action</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Form onSubmit={handleSubmit(saveData)}>
        <fieldset>
          <legend>Contact</legend>
          <Field label="First name" error={errors?.firstName}>
            <Input
              {...register("firstName", { required: "First name is required" })}
              id="first-name"
            />
          </Field>
          <Field label="Last name" error={errors?.lastName}>
            <Input
              {...register("lastName", { required: "Last name is required" })}
              id="last-name"
            />
          </Field>
          <Field label="Email" error={errors?.email}>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
            />
          </Field>
          <Field label="Password" error={errors?.password}>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
            />
          </Field>
          <Field label="Confirm password" error={errors?.confirmPassword}>
            <Input
              {...register("confirmPassword", {
                required: "Confirm the password",
                validate: (value) =>
                  value === watchPassword || "The passwords do not match",
              })}
              type="password"
              id="password-confirm"
            />
          </Field>
          <Button>Next {">"}</Button>
        </fieldset>
      </Form> */}
    </div>
  )
}
