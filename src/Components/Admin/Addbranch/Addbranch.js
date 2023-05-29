import React, { useState } from 'react'
import './addbranch.scss'
import { Form, Input, Typography, List, Button } from 'antd'
import Dashboard from '../Dashboard/Dashboard'
import axios from 'axios'
import { toast } from 'react-toastify'


const Addbranch = () => {
    const [err, setErr] = useState("")
    const [test, setTest] = useState({
        branchname: " ",
        branchaddress: " ",
        branchcontactnumber: " ",
        branchemail: " ",
        city: " ",
        zipcode: " ",

    })
    const handlechange = (e) => {
        const newdata = { ...test }
        newdata[e.target.id] = e.target.value;
        setTest(newdata)
    }

    const AddData = (e) => {
        e.preventDefault();
        const {
            branchname,
            branchaddress,
            branchcontactnumber,
            branchemail,
            city,
            zipcode,
        } = test;
        const testdata = {
            branchname: branchname.trim(),
            branchaddress,
            branchcontactnumber,
            branchemail,
            city,
            zipcode,
        };
        axios.post("http://localhost:8000/addbranch", testdata)
            .then((res) => {
                console.log("response", res)
                if (res.status === 200) {
                    toast.success(
                        "Data Added Succefully...",
                        { autoClose: 1000 },
                        {
                            position: "top-center",
                        }
                    );
                }
            })
            .catch((error) => {
                toast.error("Fail To Add Data", {
                    position: "top-center",
                });
            });
        setTest({
            branchname: " ",
            branchaddress: "",
            branchcontactnumber: " ",
            branchemail: " ",
            city: " ",
            zipcode: " ",
        });
    };

    const validation = () => {
        const err = {};
        let isValid = true;

        // branchname
        if (!test.branchname || test.branchname === " ") {
            err.staffname = "Field Cant Not Be Empty";
            isValid = false;
        }
        else if (typeof test.branchname !== "undefined") {
            if (!test.branchname.match(/^[a-zA-Z-, ]+$/)) {
                err.branchname = "Please Enter Only Letter";
                isValid = false;
            }

            else {
                console.log("no data")
            }
            //Adress
            if (!test.branchaddress || test.branchaddress === " ") {
                err.branchaddress = "Field Can-Not Be Empty";
                isValid = false;
            }
            //Contact
            if (!test.branchcontactnumber || test.branchcontactnumber === " ") {
                err.branchcontactnumber = "Field Cant Not Be Empty";
                isValid = false;
            }
            else if (typeof test.branchcontactnumber !== "undefined") {
                if (!test.branchcontactnumber.match(/^\d{10}$/ )) {
                    err.branchcontactnumber = "Please Enter 10 Digit";
                    isValid = false;
                }
            }
            else {
                console.log("no data")
            }
            //Email
            if (!test.branchemail || test.branchemail === " ") {
                err.branchemail = "Field Cant Not Be Empty";
                isValid = false;
            }
            else if (typeof test.branchemail !== "undefined") {
                if (!test.branchemail.match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;')) {
                    err.branchemail = "Enter Email in Proper Format";
                    isValid = false;
                }
            }
            //City
            if (!test.city || test.city === " ") {
                err.city = "Field Cant Not Be Empty";
                isValid = false;
            }
            else if (typeof test.city !== "undefined") {
                if (!test.city.match(/^[a-zA-Z-, ]+$/)) {
                    err.city = "Please Enter Only Letter";
                    isValid = false;
                }
            }
            //zipcode
            if (!test.zipcode || test.zipcode === " ") {
                err.zipcode = "Field Cant Not Be Emapty";
                isValid = false;
            }
            else if (typeof test.zipcode !== "undefined") {
                if (!test.zipcode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
                    err.zipcode = "Please Enter Only "
                }
            }
            else {
                console.log("no data")
            }
            setErr(err);
            return isValid;
        }
    }
    const add = (e) => {
        e.preventDefault();
   const isValid = validation();
   if (isValid){      
            AddData(e);
        }
    }

    return (

        <>
            <div className='Addbranch'>
                <Form className='Form'  >
                    <Typography.Title className='title'>Add Branch Detail</Typography.Title>

                    <List className='list'>
                        <Form.Item className='branchname' label="Branch Name">
                            <Input
                                value={test.branchname}
                                onChange={(e) => handlechange(e)}
                                id="branchname"
                                type='text'
                                className='input'
                            />
                        </Form.Item>
                        <Typography.Text style={{color: "red"}}>
                            {err["branchname"]}
                        </Typography.Text>
                    </List>

                    <List className='li'>
                        <Form.Item label="Branch Address" className='BranchAddress'>
                            <Input
                                value={test.branchaddress}
                                onChange={(e) => handlechange(e)}
                                id="branchaddress"
                                type='text'
                                className='input'
                            />
                            <Typography.Text style={{color: "red"}}>
                                {err["branchaddress"]}
                            </Typography.Text>
                        </Form.Item>
                    </List>

                    <List className='Address'>
                        <Form.Item label="Contact Number" className='ContactNumber'>
                            <Input
                                value={test.branchcontactnumber}
                                onChange={(e) => handlechange(e)}
                                id="branchcontactnumber"
                                type='text'
                                className='input'
                            />
                        </Form.Item>
                        <Typography.Text style={{color:"red"}}>
                          {err["branchcontactnumber"]}
                        </Typography.Text>
                    </List>

                    <List className='bemail'>
                        <Form.Item label=" Branch Email" className=' BranchEmail'>
                            <Input
                                value={test.branchemail}
                                onChange={(e) => handlechange(e)}
                                id="branchemail"
                                type='text'
                                className='input'
                            />
                        </Form.Item>
                        <Typography.Text style={{ color: "red" }}>
                            {err["branchemail"]}
                        </Typography.Text>
                    </List>

                    <List className='bcity'>
                        <Form.Item label="City" className='City'>
                            <Input
                                value={test.city}
                                onChange={(e) => handlechange(e)}
                                id="city"
                                type='text'
                                className='input'
                            />
                        </Form.Item>
                        <Typography.Text style={{ color: "red" }}>
                            {err["city"]}
                        </Typography.Text>
                    </List>

                    <List className='bzip'>
                        <Form.Item label="Zip Code" className='ZipCode'>
                            <Input
                                value={test.zipcode}
                                onChange={(e) => handlechange(e)}
                                id="zipcode"
                                type='text'
                                className='input'
                            />
                        </Form.Item>
                        <Typography.Text style={{ color: "red" }}>
                            {err["zipcode"]}
                        </Typography.Text>
                    </List>

                    <List className="button">
                        <Button type='submit' className='btn' onClick={add} >Add Branch</Button>
                    </List>


                </Form>
                <Dashboard />
            </div>
        </>
    )
}

export default Addbranch

