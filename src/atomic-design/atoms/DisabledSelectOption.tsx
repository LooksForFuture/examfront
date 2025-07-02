const DisabledSelectOption = () => {
  return (
    <select
      name="formValidationSelect2"
      className="form-select select2"
      data-allow-clear="true"
    >
      <option value="">Loading ...</option>
    </select>
  );
};

export default DisabledSelectOption;
