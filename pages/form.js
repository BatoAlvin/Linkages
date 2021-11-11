import React, { useState } from "react";
import { Form, Input,  Select, Button,Cascader } from "antd";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { storage } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import Link from "next/link";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const { Option } = Select;



function form() {
    
  const db = getFirestore();
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    },
  };

  const tailFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    jobtitle: "",
    number:"",
    imageUrl:"",
  });

 const residences = [
   {
value: "frontend developer",
label: "Frontend Developer",
 },
 {
  value: "backend developer",
  label: "Backend Developer",
   },
   {
    value: "fullstack developer",
    label: "Fullstack Developer",
     },
]

  const onFinish = async (e) => {
    const docRef = await addDoc(collection(db, "all_prof"), data)
      .then((docRef) => {
        console.log("Jobapplication added", docRef.id);
      })
      .catch((error) => {
        console.error("Error occurred while adding profile", error);
      });
    form.resetFields();
    console.log("Reset");
    alert("Submitted");
  };
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const storageRef = ref(storage, `image/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
    setUrl(downloadURL);
    setData({ ...data, imageUrl: downloadURL });
    setFile(null);
    setLoading(false);
  };

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        initialValues={{ residence: ["Selector"] }}
      >

<Form.Item
          name="name"
          label="Name"
          style={{ width: "400px" }}
          rules={[
            {
              required: true,
              message: "Please input your name",
              whitespace: true,
            },
          ]}
        >
          <Input
            value={data.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Item>

        
        <Form.Item
          name="email"
          label="Email"
          style={{ width: "400px" }}
        
          rules={[
            {
              type: "email",

              message: "Input isnot valid",
            },
            {
              required: true,
              message: "Please",
            },
          ]}
        >
          <Input value={data.email} name="email" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          name="number"
          label="Phone number"
          style={{ width: "400px" }}
          rules={[
            {
              required: true,
              message: "Please input phone number",
              whitespace: true,
            },
          ]}
        >
          <Input
            value={data.number}
            name="number"
            onChange={handleChange}
          />
        </Form.Item>



        <Form.Item name='jobtitle' label='JobTitle' style={{width:"250px"}}
// rules={[
//     {
//       type: 'array',
//       message:"Please select jobtitle",
// required: true,
//     }
//   ]}
>
<Cascader options={residences} value={data.jobtitle} name="jobtitle" onChange={handleChange} style={{marginLeft: '5px'}}/>
</Form.Item>





        <Form.Item {...tailFormLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

      {!url && (
      <form onSubmit={handleSubmit} >
      <div>
      <label>Image Upload</label>
        <input
          type="file"
          className="form-control-file"
          name="imageUrl"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-2"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>


        )}
        {url &&
     <Link href={url}>
     <a target="_blank">
     <input  type="text" value={url} readOnly />
     </a>
     </Link>
 }
    </div>
  );
}

export default form;
