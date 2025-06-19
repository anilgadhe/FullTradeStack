import React from 'react'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Hero from "../landing_page/home/Hero"

//Test suite

describe("Hero Component", () => {
    test("renders Hero image", () => {
        render(<Hero />);
        const HeroImage = screen.getByAltText("Hero_Img");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src", "media/images/homeHero.png")
    })


  test("renders Hero SignUp Button", () => {
    render(<Hero />);
    const SignupButton = screen.getByRole("button", { name: /sign up for free/i });
    expect(SignupButton).toBeInTheDocument();
    expect(SignupButton).toHaveClass("btn-primary"); 
  });


})
