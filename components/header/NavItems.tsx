import { NAV_ITEMS } from "@/constant";
import { INav } from "@/types";
import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface INavListView {
  items: INav[];
  wrapperClassName?: string;
  itemClassName?: string;
}
function NavListView({ items, wrapperClassName, itemClassName }: INavListView) {
  return (
    <ul
      className={cn(
        "flex items-center gap-7 font-jost relative",
        wrapperClassName
      )}
    >
      {items.map((eachItem) => (
        <li key={eachItem.id}>
          <Link
            href={eachItem.slug}
            className={cn("flex items-center gap-1.5", itemClassName)}
          >
            <span className="font-[450]">{eachItem.name}</span>
            {eachItem.submenu && eachItem.submenu.length !== 0 ? (
              <ChevronDown strokeWidth={1} size={20} className="pt-[2px]" />
            ) : null}
          </Link>

          {eachItem.submenu ? (
            <div className="absolute bg-[#FEF3C6] shadow-2xl top-9">
              <NavListView
                wrapperClassName="flex-col gap-0"
                itemClassName="px-8 py-0 hover:bg-[#fdf7df]"
                items={eachItem.submenu}
              />
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function NavItems() {
  return (
    <nav>
      <NavListView items={NAV_ITEMS} />
    </nav>
  );
}
