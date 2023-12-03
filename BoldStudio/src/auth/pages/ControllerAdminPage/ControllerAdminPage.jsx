import React from "react";
import { FormAdmin } from "../../components";
import {NavBar} from "../../../user/components/index"
import './controllerAdmin.css'

export function ControllerAdminPage() {
  const handleFormSubmit = (formData) => {
    console.log("Form data submitted:", formData);
  };

  return (
    <>
    <NavBar />
    <div className="controllerBody">
      <h3>Admin Control Panel</h3>
      <h2>Upload project</h2>
      <FormAdmin onFormSubmit={handleFormSubmit} />
    </div>
    </>
  );
}
