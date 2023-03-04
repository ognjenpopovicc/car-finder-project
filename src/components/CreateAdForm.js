import { useRef, useState } from "react";

import Container from "../ui/Container";
import TwoColGrid from "../ui/TwoColGrid";
import InputBox from "../ui/InputBox";
import PhotoIcon from "../imgs/photo-icon.png";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";
import SelectInput from "../ui/Select";

import { Form } from "react-router-dom";

import { useUploadImage } from "../contexts/ImageUploadContext";

import {
  manus,
  getModels,
  gears,
  fuels,
  drive,
  bodies,
  euroClass,
  doorNumber,
  seatsNumber,
  side,
  ac,
  color,
  interiorMaterial,
  interiorColor,
  damage,
  change,
  origin,
} from "../carData";

const CreateAdForm = ({ id, data }) => {
  const [isDisabled, changeDisabled] = useState(true);
  const [models, changeModels] = useState([]);
  const [hp, changeHp] = useState("");

  const manuRef = useRef("");
  const milageRef = useRef("");
  const powerRef = useRef("");

  const { sendFile } = useUploadImage();

  const activateModel = () => {
    changeDisabled(false);
    const newModels = getModels(manuRef.current.value).models;
    changeModels(newModels);
  };

  const kwToHp = () => {
    changeHp((powerRef.current.value * 1.341).toFixed(2));
  };

  const onChangeHandler = (e) => {
    const files = e.target.files;

    let arr = [];

    Object.values(files).forEach((file) => {
      arr.push(file);
    });

    arr.unshift();

    sendFile(arr);
  };

  //  required={data ? false : true}

  // required={true}

  return (
    <Container className="margin-top-large-medium">
      <Form method="post" action={data ? { id } : "/create"}>
        <TwoColGrid className="gap-mid">
          <InputBox className="double-field">
            <label className="photo-upload" htmlFor="photo-upload">
              <div>
                <img
                  src={PhotoIcon}
                  className="photo-upload__image"
                  alt="Camera Icon"
                ></img>
              </div>
              <input
                className="photo-upload__input"
                id="photo-upload"
                onChange={onChangeHandler}
                type="file"
                name="image"
                multiple
              ></input>
            </label>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox>
            <Label htmlFor="manu">Manufacturer</Label>
            <SelectInput
              name="manu"
              onChange={activateModel}
              ref={manuRef}
              id="manu"
              values={manus}
              disabled={data ? true : false}
              defaultValue={data ? data.manu : ""}
              required={data ? false : true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="model">Model</Label>
            <SelectInput
              name="model"
              id="model"
              disabled={data ? false : isDisabled}
              values={models}
              defaultValue={data ? data.model : ""}
              required={data ? false : true}
            ></SelectInput>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox>
            <Label htmlFor="year">Year</Label>
            <Input
              name="year"
              id="year"
              type="number"
              min="0"
              defaultValue={data ? data.year : ""}
              required={true}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="body">Car Body</Label>
            <SelectInput
              name="body"
              id="body"
              values={bodies}
              defaultValue={data ? data.body : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="fuel">Fuel</Label>
            <SelectInput
              name="fuel"
              id="fuel"
              values={fuels}
              defaultValue={data ? data.fuel : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="mark">Mark</Label>
            <Input
              name="mark"
              id="mark"
              defaultValue={data ? data.mark : ""}
              required={true}
            ></Input>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox>
            <Label htmlFor="power">Power (kW)</Label>
            <Input
              name="power"
              id="power"
              type="number"
              ref={powerRef}
              onChange={kwToHp}
              defaultValue={data ? data.power : ""}
              required={true}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="power-hp">Power (hp)</Label>
            <Input
              name="powerHp"
              id="power-hp"
              type="number"
              disabled={true}
              value={hp}
              placeholder={hp}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="volume">Volume</Label>
            <Input
              name="volume"
              id="volume"
              type="number"
              defaultValue={data ? data.volume : ""}
              required={true}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="milage">Milage</Label>
            <Input
              name="milage"
              ref={milageRef}
              id="milage"
              type="number"
              min="0"
              defaultValue={data ? data.milage : ""}
              required={true}
            ></Input>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox>
            <Label htmlFor="euro">Euro class</Label>
            <SelectInput
              name="euro"
              id="euro"
              values={euroClass}
              defaultValue={data ? data.euro : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="drive">Drive</Label>
            <SelectInput
              name="drive"
              id="drive"
              values={drive}
              defaultValue={data ? data.drive : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="gear">Gear</Label>
            <SelectInput
              name="gear"
              id="gear"
              values={gears}
              defaultValue={data ? data.gear : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="door">Door number</Label>
            <SelectInput
              name="door"
              id="door"
              values={doorNumber}
              defaultValue={data ? data.door : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="seats">Seats number</Label>
            <SelectInput
              name="seats"
              id="seats"
              values={seatsNumber}
              defaultValue={data ? data.seats : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="steering">Steering wheel side</Label>
            <SelectInput
              name="steering"
              id="steering"
              values={side}
              defaultValue={data ? data.steering : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="ac">AC</Label>
            <SelectInput
              name="ac"
              id="ac"
              values={ac}
              defaultValue={data ? data.ac : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="color">Color</Label>
            <SelectInput
              name="color"
              id="color"
              values={color}
              defaultValue={data ? data.color : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="interior-material">Interior Material</Label>
            <SelectInput
              id="interior-material"
              values={interiorMaterial}
              name="interior-material"
              defaultValue={data ? data.interiorMaterial : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="interior-color">Interior color</Label>
            <SelectInput
              id="interior-color"
              values={interiorColor}
              name="interior-color"
              defaultValue={data ? data.interiorColor : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="registered">Registered until</Label>
            <Input
              name="registered"
              id="registered"
              type="date"
              defaultValue={data ? data.registered : ""}
              required={true}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="damage">Damage</Label>
            <SelectInput
              name="damage"
              id="damage"
              values={damage}
              defaultValue={data ? data.damage : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="change">Change</Label>
            <SelectInput
              name="change"
              id="change"
              values={change}
              defaultValue={data ? data.change : ""}
              required={true}
            ></SelectInput>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox>
            <Label htmlFor="origin">Origin</Label>
            <SelectInput
              name="origin"
              id="origin"
              values={origin}
              defaultValue={data ? data.origin : ""}
              required={true}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="vin">VIN</Label>
            <Input
              name="vin"
              id="vin"
              defaultValue={data ? data.vin : ""}
              required={true}
            ></Input>
          </InputBox>
          <InputBox>
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              id="price"
              type="number"
              defaultValue={data ? data.price : ""}
              required={true}
            ></Input>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <InputBox className="double-field">
            <Label htmlFor="description">Description</Label>
            <Input
              className="textarea"
              type="textarea"
              id="description"
              name="description"
              defaultValue={data ? data.description : ""}
              required={true}
            ></Input>
          </InputBox>
        </TwoColGrid>
        <TwoColGrid className="gap-mid margin-top-small-large">
          <Button type="submit">Create</Button>
        </TwoColGrid>
      </Form>
    </Container>
  );
};

/*
        <TwoColGrid className="gap-mid margin-top-small-large">
        <InputBox>
          <Label htmlFor="adress">Adress</Label>
          <Input id="adress"></Input>
        </InputBox>
        <InputBox>
          <Label htmlFor="city">City</Label>
          <Input id="city"></Input>
        </InputBox>
        <InputBox>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone"></Input>
        </InputBox>
        <InputBox>
          <Label htmlFor="name">Name and Surname</Label>
          <Input id="name"></Input>
        </InputBox>
        <InputBox className="double-field">
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email"></Input>
        </InputBox>
      </TwoColGrid>
*/

export default CreateAdForm;
