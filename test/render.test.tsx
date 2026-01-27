import React from "react";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlRaw,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlButton,
  MjmlImage,
} from "../src";
import { render } from "../src/utils/render";

describe("render()", () => {
  it("should render the HTML", () => {
    const email = (
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Title</MjmlTitle>
        </MjmlHead>
        <MjmlBody>
          <MjmlRaw>
            <p>Paragraph</p>
          </MjmlRaw>
        </MjmlBody>
      </Mjml>
    );
    const { html } = render(email, { minify: true });
    expect(html).toBeDefined();
    expect(html).toContain("<!doctype html>");
    expect(html).toContain("<title>Title</title>");
    expect(html).toContain("<p>Paragraph</p>");
  });

  it("should throw an error if invalid markup is given", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    expect(() => render(email)).toThrow(
      "Element div doesn't exist or is not registered"
    );
  });

  it("should not throw an error if soft validation level is passed", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    const { errors } = render(email, {
      validationLevel: "soft",
      minify: false,
    });
    expect(errors).toHaveLength(1);
    expect(errors![0]!.message).toContain(
      "Element div doesn't exist or is not registered"
    );
  });

  it("should handle all prop types (numbers, booleans, strings, objects, etc.) without error", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          {/* Boolean in booleanToString array -> returns property name */}
          <MjmlSection fullWidth>
            {/* Number in numberToPixel array -> returns `${value}px` */}
            <MjmlColumn width={300}>
              <MjmlText
                color="red" // String value -> returns string as-is
                fontSize={16} // Number in numberToPixel array -> returns `${value}px`
              >
                Test text content
              </MjmlText>
              <MjmlButton>Click me</MjmlButton>
              {/* Boolean NOT in booleanToString array -> returns `${value}` (string) */}
              <MjmlImage fluidOnMobile />
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    );
    const { html, errors } = render(email);
    // Verify no errors when rendering the different prop types
    expect(errors).toHaveLength(0);
    expect(html).toBeDefined();
  });
});
