/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import HomePage from "./homePage.jsx";

function setup() {
    return shallow(<HomePage />);
}

describe("<HomePage />", () => {

    // it("Home page includes a button with a text of 'Get started using your dashboard!'", () => {
    //     const wrapper = setup();

    //     let actual = wrapper.find(".mdl-button").children().get(0);
    //     let expected = "Get started using your dashboard!";

    //     expect(actual).toEqual(expected);

    // });

});