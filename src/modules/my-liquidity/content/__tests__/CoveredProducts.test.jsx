import { CoveredProducts } from "@/modules/my-liquidity/content/CoveredProducts";
import { testData } from "@/utils/unit-tests/test-data";
import { initiateTest } from "@/utils/unit-tests/test-mockup-fn";
import { screen } from "@testing-library/react";

describe("CoveredProducts", () => {
  const props = { coverInfo: testData.coverInfoWithProducts };
  const { initialRender } = initiateTest(CoveredProducts, props);

  beforeEach(() => {
    initialRender();
  });

  test("should render the main container", () => {
    const container = screen.getByTestId("cover-products-container");
    expect(container).toBeInTheDocument();
  });

  test("should render the container label", () => {
    const label = screen.getByText("Products Covered Under This Pool");
    expect(label).toBeInTheDocument();
  });

  test("should render the correct number of products", () => {
    const products = screen.queryAllByTestId("cover-product");
    expect(products.length).toBe(props.coverInfo.products.length);
  });

  test("should not show the liquidity product modal by default", () => {
    const modal = screen.queryByTestId("liquidity-product-modal");
    expect(modal).toBeNull();
  });

  test("should show the liquidity product modal when a product is clicked", () => {
    const productButton = screen
      .getAllByTestId("cover-product")[0]
      .querySelector("button");
    productButton.click();

    const modal = screen.getByTestId("liquidity-product-modal");
    expect(modal).toBeInTheDocument();
  });
});
