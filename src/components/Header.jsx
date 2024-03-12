import React from "react"

export default function Header (props) {

    const filterElements = [...props.filters].map(filter => {
        return (
            <div className="flex justify-center" key={filter}>
                <span className="filter-tablet rounded-r-none pointer-events-none">
                    {filter}
                </span>
                <button className="remove-filter" onClick={() => props.removeFilter(filter)}>
                    <img src="/images/icon-remove.svg" alt="Remove filter icon" />
                </button>
            </div>
        )
    });

    return (
        <header>
            <div className="container h-[156px]">
                { filterElements.length > 0 &&                 
                <div className="filters-container">
                    <div className="filters">
                        {filterElements}
                    </div>
                    <button className="clear" onClick={() => props.clearFilters()}>
                        Clear
                    </button>
                </div>
                }
            </div>
        </header>
    )
}