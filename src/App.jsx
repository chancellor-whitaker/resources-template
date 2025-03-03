export default function App(resources) {
  const { useDropdown, Dropdown, Wrapper } = resources;

  const dropdown = useDropdown({
    options: [
      "chance",
      "chad",
      "ethan",
      "evan",
      "bethany",
      "random",
      "apple",
      "orange",
    ],
    sortSearchResults: true,
    showFraction: true,
    showSelected: true,
    ellipsisAfter: 4,
    label: "People",
    showLabel: true,
    multiple: true,
  });

  return (
    <Wrapper>
      <Dropdown {...dropdown}></Dropdown>
    </Wrapper>
  );
}
