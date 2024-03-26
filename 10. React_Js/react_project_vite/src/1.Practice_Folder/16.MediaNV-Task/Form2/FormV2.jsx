import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function FormV2({ user,setUser }) {
    console.log("foem2-------",user)
  return (  
    <div className="w-50 m-auto p-4 border border-3 border-dark bg-light mt-5 ">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            value={user?.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            value={user?.password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleage">Age</Label>
          <Input
            id="exampleAge"
            name="age"
            placeholder="age placeholder"
            type="number"
            onChange={(e) => setUser({ ...user, age: e?.target?.value })}
            value={user?.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input
            id="exampleCity"
            name="city"
            placeholder="city placeholder"
            type="text"
            onChange={(e) => setUser({ ...user, city: e?.target?.value })}
            value={user?.city}
          />
        </FormGroup>
        <Button className='w-100 bg-danger'>...</Button>
      </Form>
    </div>
  );
}
