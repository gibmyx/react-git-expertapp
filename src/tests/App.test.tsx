import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe("Testing <App/>", () => {
  test("it should show correctly <GifExpertApp/> component", () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
