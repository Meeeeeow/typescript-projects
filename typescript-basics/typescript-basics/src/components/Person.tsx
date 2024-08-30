type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = ({ name: { first, last } }: PersonProps) => {
  console.log(`First name is: ${first} and last name is: ${last}`);
  return (
    <h3>
      First name is: {first} and last name is: {last}
    </h3>
  );
};

export default Person;
