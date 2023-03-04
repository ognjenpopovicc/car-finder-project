import { useState, useRef } from "react";

import Label from "../ui/Label";
import TwoColGrid from "../ui/TwoColGrid";
import Input from "../ui/Input";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import Center from "../ui/Center";
import ButtonMini from "../ui/ButtonMini";
import Container from "../ui/Container";
import HeroImage from "../ui/HeroImage";
import SelectInput from "../ui/Select";

import { manus, getModels, gears, fuels, bodies, color } from "../carData";

import { useQuery } from "../contexts/QueryContext";

import { useLocation, useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [isDisabled, changeDisabled] = useState(true);
  const [models, changeModels] = useState([]);

  const [display, changeDisplay] = useState({
    text: `Show more`,
    display: false,
  });

  const navigate = useNavigate();

  const { queryCreate } = useQuery();

  const location = useLocation();

  const manuRef = useRef("");
  const modelRef = useRef("");
  const bodyRef = useRef("");
  const fuelRef = useRef("");
  const gearRef = useRef("");
  const cityRef = useRef("");
  const colorRef = useRef("");

  const yearFromRef = useRef("");
  const priceFromRef = useRef("");
  const powerFromRef = useRef("");
  const milageFromRef = useRef("");
  const volumeFromRef = useRef("");

  const yearToRef = useRef("");
  const priceToRef = useRef("");
  const powerToRef = useRef("");
  const milageToRef = useRef("");
  const volumeToRef = useRef("");

  const activateModel = () => {
    changeDisabled(false);
    const newModels = getModels(manuRef.current.value).models;
    changeModels(newModels);
  };

  const onChangeDisplay = () => {
    if (display.display) {
      changeDisplay({
        text: `Show more`,
        display: false,
      });
    } else {
      changeDisplay({
        text: `Show less`,
        display: true,
      });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const dataEqual = {
      manu: manuRef.current.value,
      model: modelRef.current.value,
      fuel: fuelRef.current.value,
      body: bodyRef.current.value,
      gear: gearRef.current.value,
      city: cityRef.current.value,
      color: colorRef.current.value,
    };

    Object.keys(dataEqual).forEach((key) => {
      if (!dataEqual[key]) {
        delete dataEqual[key];
      }
    });

    const dataFrom = {
      year: +yearFromRef.current.value,
      price: +priceFromRef.current.value,
      power: +powerFromRef.current.value,
      milage: +milageFromRef.current.value,
      volume: +volumeFromRef.current.value,
    };

    Object.keys(dataFrom).forEach((key) => {
      if (!dataFrom[key]) {
        delete dataFrom[key];
      }
    });

    const dataTo = {
      year: +yearToRef.current.value,
      price: +priceToRef.current.value,
      power: +powerToRef.current.value,
      milage: +milageToRef.current.value,
      volume: +volumeToRef.current.value,
    };

    Object.keys(dataTo).forEach((key) => {
      if (!dataTo[key]) {
        delete dataTo[key];
      }
    });

    await queryCreate(dataEqual, dataFrom, dataTo);

    if (location.pathname !== `/results`) {
      return navigate(`results`);
    }
  };

  return (
    <Container className="margin-top-large-large padding-top-medium">
      <HeroImage />
      <form onSubmit={submitHandler} className="search__form">
        <TwoColGrid className="gap-mid">
          <InputBox>
            <Label htmlFor="manu">Manufacturer</Label>
            <SelectInput
              onChange={activateModel}
              ref={manuRef}
              id="manu"
              values={manus}
            ></SelectInput>
          </InputBox>
          <InputBox>
            <Label htmlFor="model">Model</Label>
            <SelectInput
              id="model"
              disabled={isDisabled}
              values={models}
              ref={modelRef}
            ></SelectInput>
          </InputBox>
          <TwoColGrid className="gap-small">
            <InputBox>
              <Label htmlFor="year-from">Year from</Label>
              <Input id="year-from" type="number" ref={yearFromRef}></Input>
            </InputBox>
            <InputBox>
              <Label htmlFor="year-to">to</Label>
              <Input id="year-to" type="number" ref={yearToRef}></Input>
            </InputBox>
          </TwoColGrid>
          <TwoColGrid className="gap-small">
            <InputBox>
              <Label htmlFor="year-from">Price from</Label>
              <Input id="price-from" type="number" ref={priceFromRef}></Input>
            </InputBox>
            <InputBox>
              <Label htmlFor="year-to">to</Label>
              <Input id="price-to" type="number" ref={priceToRef}></Input>
            </InputBox>
          </TwoColGrid>
        </TwoColGrid>
        {display.display && (
          <TwoColGrid className="gap-mid margin-top-small-medium">
            <InputBox>
              <Label htmlFor="body">Car body</Label>
              <SelectInput
                id="body"
                values={bodies}
                ref={bodyRef}
              ></SelectInput>
            </InputBox>
            <InputBox>
              <Label htmlFor="fuel">Fuel</Label>
              <SelectInput id="fuel" values={fuels} ref={fuelRef}></SelectInput>
            </InputBox>
            <TwoColGrid className="gap-small">
              <InputBox>
                <Label htmlFor="power-from">Power from</Label>
                <Input id="power-from" type="number" ref={powerFromRef}></Input>
              </InputBox>
              <InputBox>
                <Label htmlFor="power-to">to (kW)</Label>
                <Input id="power-to" type="number" ref={powerToRef}></Input>
              </InputBox>
            </TwoColGrid>
            <InputBox>
              <Label htmlFor="gear">Gear</Label>
              <SelectInput id="gear" values={gears} ref={gearRef}></SelectInput>
            </InputBox>
            <TwoColGrid className="gap-small">
              <InputBox>
                <Label htmlFor="milage-from">Milage from</Label>
                <Input
                  id="milage-from"
                  type="number"
                  ref={milageFromRef}
                ></Input>
              </InputBox>
              <InputBox>
                <Label htmlFor="milage-to">to</Label>
                <Input id="milage-to" type="number" ref={milageToRef}></Input>
              </InputBox>
            </TwoColGrid>
            <InputBox>
              <Label htmlFor="city">City</Label>
              <Input id="city" ref={cityRef}></Input>
            </InputBox>
            <TwoColGrid className="gap-small">
              <InputBox>
                <Label htmlFor="volume-from">Volume from</Label>
                <Input
                  id="volume-from"
                  type="number"
                  ref={volumeFromRef}
                ></Input>
              </InputBox>
              <InputBox>
                <Label htmlFor="volume-to">to</Label>
                <Input id="volume-to" type="number" ref={volumeToRef}></Input>
              </InputBox>
            </TwoColGrid>
            <InputBox>
              <Label htmlFor="color">Color</Label>
              <SelectInput
                id="color"
                values={color}
                ref={colorRef}
              ></SelectInput>
            </InputBox>
          </TwoColGrid>
        )}
        <TwoColGrid className="gap-mid margin-top-small-large">
          <Button type="submit">Search</Button>
        </TwoColGrid>

        <Center className="margin-top-small-large">
          <ButtonMini onClick={onChangeDisplay}>{display.text}</ButtonMini>
        </Center>
      </form>
    </Container>
  );
};

export default SearchForm;
