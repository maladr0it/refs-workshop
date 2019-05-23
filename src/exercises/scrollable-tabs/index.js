import React from "react";

import Tabs from "./Tabs";

const tabData = [
  {
    label: "Foo",
    content: (
      <>
        <h1>Foo Section</h1>
        <p>
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
        </p>

        <p>
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
        </p>
      </>
    )
  },
  {
    label: "Bar",
    content: (
      <>
        <h1>Bar Section</h1>
        <p>
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
        </p>
        <p>
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
        </p>
        <p>
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
          Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar Bar
        </p>
      </>
    )
  }
];

const ScrollableTabs = () => <Tabs data={tabData} />;

export default ScrollableTabs;
