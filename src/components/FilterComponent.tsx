import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  return (
    <Select onValueChange={onFilterChange}>
      <SelectTrigger className="w-[210px]">
        <SelectValue placeholder="Filter:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="low to high">Price: Low to High</SelectItem>
          <SelectItem value="high to low">Price: High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
