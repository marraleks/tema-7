const overskrift = prompt("What color should the header be?");
const fontfarge = prompt("What color should the font be?");

document.write(`
    <style>
        h2{
            color: ${overskrift}
        }

        p{
            color: ${fontfarge};
        }
`);
