import { useEffect, useState } from "react";
import Button from "../../../components/Buttons";

type FilterState = {
  Type: string[];
  Interest: string[];
  "Difficulty Level": string[];
};

interface FilterProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  filterOptions: FilterState;
}

const Filter: React.FC<FilterProps> = ({
  filters,
  setFilters,
  filterOptions,
}) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleCheckbox = (category: keyof FilterState, value: string) => {
    const isSelected = localFilters[category].includes(value);
    const updatedCategory = isSelected
      ? localFilters[category].filter((v) => v !== value)
      : [...localFilters[category], value];

    setLocalFilters({ ...localFilters, [category]: updatedCategory });
  };

  const resetFilters = () => {
    setLocalFilters({ Type: [], Interest: [], "Difficulty Level": [] });
    setFilters({ Type: [], Interest: [], "Difficulty Level": [] });
  };

  const saveFilters = () => {
    setFilters(localFilters);
  };

  return (
    <div className="flex flex-col gap-[40px]">
      <h2 className="text-[32px] font-semibold text-black font-inter">
        Profile & Filter
      </h2>
      <div className="h-fit w-fit rounded-[20px] px-[20px] py-[40px] flex flex-col gap-[24px] bg-[#BEC9E6]">
        {Object.entries(filterOptions).map(([cat, options]) => (
          <div key={cat} className="h-fit">
            <h3 className="font-semibold text-[20px] text-black font-inter">
              {cat}
            </h3>
            <div className="flex flex-col mt-[10px] gap-[8px]">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex gap-[8px] items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={localFilters[cat as keyof FilterState].includes(
                      option
                    )}
                    onChange={() =>
                      handleCheckbox(cat as keyof FilterState, option)
                    }
                    className="h-[16px] w-[16px] border border-[#26355F] rounded-[4px]"
                  />
                  <span
                    className="font-normal text-[16px] text-[#26355F] font-inter"
                    title={option}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-row gap-[25px]">
          <Button
            onClick={saveFilters}
            label="Save"
            variant="blue"
            className="w-[137px] text-[16px] font-normal p-[11px] rounded-[16px] bg-[#26355F]"
          />
          <Button
            onClick={resetFilters}
            label="Reset"
            variant="blue"
            className="w-[137px] text-[16px] font-normal p-[11px] rounded-[16px] bg-[#26355F]"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
