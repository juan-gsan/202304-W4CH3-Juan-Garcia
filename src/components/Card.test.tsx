import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../hooks/use.characters");
describe("Given a Card Component", () => {
  describe("When it is instantiated", () => {
    // render(
    //   // <Card
    //   //   item={undefined}
    //   //   handleKill={function (character: AllCharacters): Promise<void> {
    //   //     throw new Error("Function not implemented.");
    //   //   }}
    //   // ></Card>
    // );
    const element = screen.getByRole("listitem");
    test("Then it should be in the component", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
