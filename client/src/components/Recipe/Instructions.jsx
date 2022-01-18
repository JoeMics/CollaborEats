import React from 'react';

export default function Instructions(props) {
  // intructions = getIntructions()
  // descriptions = getDescriptions()
  return (
    <div className="flex w-1/3 flex-col ml-4 bg-red-500">
      <h3 className="ml-4 mt-4">Description</h3>
      <p className="m-4">
        {/* {descriptions} */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sed aperiam nihil placeat,
        vero natus repellat eum, ex nemo maxime quos ab. Nulla, tempore qui sunt quia hic ad nam?
      </p>

      <h1 className="ml-4">Instructions</h1>
      <p className="m-4">
        {/* {instructions} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed, consequuntur quam
        cumque deleniti numquam mollitia blanditiis aliquam deserunt ad dolorum recusandae doloribus
        suscipit distinctio natus. Voluptatibus, consequatur. Hic, quae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores voluptate possimus earum, cum beatae nostrum delectus
        autem hic labore cupiditate eaque vero ab exercitationem, harum maxime repellendus, vel quis
        ipsam.
      </p>
    </div>
  );
}
