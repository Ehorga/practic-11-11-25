import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../store/todoSlice";

import Icon from "@mdi/react";
const TaskForm = () => {
    const dispatch = useDispatch();
  return (
    <Formik initialValues={{ text: "" }} onSubmit={(values)=> {
        dispatch(addNewTask({ text: values.text }));
    }}>
      {() => {
        return (
          <Form>
            <p>Enter your task</p>
            <Field name="text" />
            <ErrorMessage name="text" />
            <button type="submit">Add Task</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TaskForm;
