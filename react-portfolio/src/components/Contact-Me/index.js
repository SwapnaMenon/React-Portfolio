import React, { useState } from "react";

const [formState, setFormState] = useState({name:'', email:'', contactnumber:'', message:''});
<input type="email" name="email" defaultValue={formState.name} />
const { name, email, contactnumber, message } = formState;



