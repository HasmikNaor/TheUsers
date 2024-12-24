type SearchProps = {
  setVal: React.Dispatch<React.SetStateAction<string>>;
  val: string;
};
const Search = ({ setVal, val }: SearchProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };
  return (
    <input
      className="search"
      value={val}
      onChange={handleChange}
      placeholder="Search"
    />
  );
};

export default Search;
