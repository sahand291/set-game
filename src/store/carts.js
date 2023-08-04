import ofg from "../img/oval_solid_green.png";
import ofr from "../img/oval_solid_red.png";
import ofb from "../img/oval_solid_blue.png";
import osg from "../img/oval_striped_green.png";
import osr from "../img/oval_striped_red.png";
import osb from "../img/oval_striped_blue.png";
import oog from "../img/oval_open_green.png";
import oor from "../img/oval_open_red.png";
import oob from "../img/oval_open_blue.png";
import dfg from "../img/diamond_solid_green.png";
import dfr from "../img/diamond_solid_red.png";
import dfb from "../img/diamond_solid_blue.png";
import dsg from "../img/diamond_striped_green.png";
import dsr from "../img/diamond_striped_red.png";
import dsb from "../img/diamond_striped_blue.png";
import dog from "../img/diamond_open_green.png";
import dor from "../img/diamond_open_red.png";
import dob from "../img/diamond_open_blue.png";
import sfg from "../img/squiggle_solid_green.png";
import sfr from "../img/squiggle_solid_red.png";
import sfb from "../img/squiggle_solid_blue.png";
import ssg from "../img/squiggle_striped_green.png";
import ssr from "../img/squiggle_striped_red.png";
import ssb from "../img/squiggle_striped_blue.png";
import sog from "../img/squiggle_open_green.png";
import sor from "../img/squiggle_open_red.png";
import sob from "../img/squiggle_open_blue.png";

const patterns = [
  { color: 'green', shape: "oval", pattern: "solid", count: 1, id: "ofg1", img: ofg },
  { color: 'red', shape: "oval", pattern: "solid", count: 1, id: "ofr1", img: ofr },
  { color: 'blue', shape: "oval", pattern: "solid", count: 1, id: "ofb1", img: ofb },
  { color: 'green', shape: "oval", pattern: "striped", count: 1, id: "osg1", img: osg },
  { color: 'red', shape: "oval", pattern: "striped", count: 1, id: "osr1", img: osr },
  { color: 'blue', shape: "oval", pattern: "striped", count: 1, id: "osb1", img: osb },
  { color: 'green', shape: "oval", pattern: "open", count: 1, id: "oog1", img: oog },
  { color: 'red', shape: "oval", pattern: "open", count: 1, id: "oor1", img: oor },
  { color: 'blue', shape: "oval", pattern: "open", count: 1, id: "oob1", img: oob },
  { color: 'green', shape: "diamond", pattern: "solid", count: 1, id: "dfg1", img: dfg },
  { color: 'red', shape: "diamond", pattern: "solid", count: 1, id: "dfr1", img: dfr },
  { color: 'blue', shape: "diamond", pattern: "solid", count: 1, id: "dfb1", img: dfb },
  { color: 'green', shape: "diamond", pattern: "striped", count: 1, id: "dsg1", img: dsg },
  { color: 'red', shape: "diamond", pattern: "striped", count: 1, id: "dsr1", img: dsr },
  { color: 'blue', shape: "diamond", pattern: "striped", count: 1, id: "dsb1", img: dsb },
  { color: 'green', shape: "diamond", pattern: "open", count: 1, id: "dog1", img: dog },
  { color: 'red', shape: "diamond", pattern: "open", count: 1, id: "dor1", img: dor },
  { color: 'blue', shape: "diamond", pattern: "open", count: 1, id: "dob1", img: dob },
  { color: 'green', shape: "squiggle", pattern: "solid", count: 1, id: "sfg1", img: sfg },
  { color: 'red', shape: "squiggle", pattern: "solid", count: 1, id: "sfr1", img: sfr },
  { color: 'blue', shape: "squiggle", pattern: "solid", count: 1, id: "sfb1", img: sfb },
  { color: 'green', shape: "squiggle", pattern: "striped", count: 1, id: "ssg1", img: ssg },
  { color: 'red', shape: "squiggle", pattern: "striped", count: 1, id: "ssr1", img: ssr },
  { color: 'blue', shape: "squiggle", pattern: "striped", count: 1, id: "ssb1", img: ssb },
  { color: 'green', shape: "squiggle", pattern: "open", count: 1, id: "sog1", img: sog },
  { color: 'red', shape: "squiggle", pattern: "open", count: 1, id: "sor1", img: sor },
  { color: 'blue', shape: "squiggle", pattern: "open", count: 1, id: "sob1", img: sob },

  { color: 'green', shape: "oval", pattern: "solid", count: 2, id: "ofg2", img: ofg },
  { color: 'red', shape: "oval", pattern: "solid", count: 2, id: "ofr2", img: ofr },
  { color: 'blue', shape: "oval", pattern: "solid", count: 2, id: "ofb2", img: ofb },
  { color: 'green', shape: "oval", pattern: "striped", count: 2, id: "osg2", img: osg },
  { color: 'red', shape: "oval", pattern: "striped", count: 2, id: "osr2", img: osr },
  { color: 'blue', shape: "oval", pattern: "striped", count: 2, id: "osb2", img: osb },
  { color: 'green', shape: "oval", pattern: "open", count: 2, id: "oog2", img: oog },
  { color: 'red', shape: "oval", pattern: "open", count: 2, id: "oor2", img: oor },
  { color: 'blue', shape: "oval", pattern: "open", count: 2, id: "oob2", img: oob },
  { color: 'green', shape: "diamond", pattern: "solid", count: 2, id: "dfg2", img: dfg },
  { color: 'red', shape: "diamond", pattern: "solid", count: 2, id: "dfr2", img: dfr },
  { color: 'blue', shape: "diamond", pattern: "solid", count: 2, id: "dfb2", img: dfb },
  { color: 'green', shape: "diamond", pattern: "striped", count: 2, id: "dsg2", img: dsg },
  { color: 'red', shape: "diamond", pattern: "striped", count: 2, id: "dsr2", img: dsr },
  { color: 'blue', shape: "diamond", pattern: "striped", count: 2, id: "dsb2", img: dsb },
  { color: 'green', shape: "diamond", pattern: "open", count: 2, id: "dog2", img: dog },
  { color: 'red', shape: "diamond", pattern: "open", count: 2, id: "dor2", img: dor },
  { color: 'blue', shape: "diamond", pattern: "open", count: 2, id: "dob2", img: dob },
  { color: 'green', shape: "squiggle", pattern: "solid", count: 2, id: "sfg2", img: sfg },
  { color: 'red', shape: "squiggle", pattern: "solid", count: 2, id: "sfr2", img: sfr },
  { color: 'blue', shape: "squiggle", pattern: "solid", count: 2, id: "sfb2", img: sfb },
  { color: 'green', shape: "squiggle", pattern: "striped", count: 2, id: "ssg2", img: ssg },
  { color: 'red', shape: "squiggle", pattern: "striped", count: 2, id: "ssr2", img: ssr },
  { color: 'blue', shape: "squiggle", pattern: "striped", count: 2, id: "ssb2", img: ssb },
  { color: 'green', shape: "squiggle", pattern: "open", count: 2, id: "sog2", img: sog },
  { color: 'red', shape: "squiggle", pattern: "open", count: 2, id: "sor2", img: sor },
  { color: 'blue', shape: "squiggle", pattern: "open", count: 2, id: "sob2", img: sob },

  { color: 'green', shape: "oval", pattern: "solid", count: 3, id: "ofg3", img: ofg },
  { color: 'red', shape: "oval", pattern: "solid", count: 3, id: "ofr3", img: ofr },
  { color: 'blue', shape: "oval", pattern: "solid", count: 3, id: "ofb3", img: ofb },
  { color: 'green', shape: "oval", pattern: "striped", count: 3, id: "osg3", img: osg },
  { color: 'red', shape: "oval", pattern: "striped", count: 3, id: "osr3", img: osr },
  { color: 'blue', shape: "oval", pattern: "striped", count: 3, id: "osb3", img: osb },
  { color: 'green', shape: "oval", pattern: "open", count: 3, id: "oog3", img: oog },
  { color: 'red', shape: "oval", pattern: "open", count: 3, id: "oor3", img: oor },
  { color: 'blue', shape: "oval", pattern: "open", count: 3, id: "oob3", img: oob },
  { color: 'green', shape: "diamond", pattern: "solid", count: 3, id: "dfg3", img: dfg },
  { color: 'red', shape: "diamond", pattern: "solid", count: 3, id: "dfr3", img: dfr },
  { color: 'blue', shape: "diamond", pattern: "solid", count: 3, id: "dfb3", img: dfb },
  { color: 'green', shape: "diamond", pattern: "striped", count: 3, id: "dsg3", img: dsg },
  { color: 'red', shape: "diamond", pattern: "striped", count: 3, id: "dsr3", img: dsr },
  { color: 'blue', shape: "diamond", pattern: "striped", count: 3, id: "dsb3", img: dsb },
  { color: 'green', shape: "diamond", pattern: "open", count: 3, id: "dog3", img: dog },
  { color: 'red', shape: "diamond", pattern: "open", count: 3, id: "dor3", img: dor },
  { color: 'blue', shape: "diamond", pattern: "open", count: 3, id: "dob3", img: dob },
  { color: 'green', shape: "squiggle", pattern: "solid", count: 3, id: "sfg3", img: sfg },
  { color: 'red', shape: "squiggle", pattern: "solid", count: 3, id: "sfr3", img: sfr },
  { color: 'blue', shape: "squiggle", pattern: "solid", count: 3, id: "sfb3", img: sfb },
  { color: 'green', shape: "squiggle", pattern: "striped", count: 3, id: "ssg3", img: ssg },
  { color: 'red', shape: "squiggle", pattern: "striped", count: 3, id: "ssr3", img: ssr },
  { color: 'blue', shape: "squiggle", pattern: "striped", count: 3, id: "ssb3", img: ssb },
  { color: 'green', shape: "squiggle", pattern: "open", count: 3, id: "sog3", img: sog },
  { color: 'red', shape: "squiggle", pattern: "open", count: 3, id: "sor3", img: sor },
  { color: 'blue', shape: "squiggle", pattern: "open", count: 3, id: "sob3", img: sob },
];

export default patterns;
