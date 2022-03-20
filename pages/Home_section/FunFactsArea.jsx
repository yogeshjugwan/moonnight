import React from 'react'

const FunFactsArea = () => {
    const funFactsAreaData = [
        {
            "title": "30",
            "discription": "Years in Business",
            "icon": "fa fa-calendar"

        },
        {
            "title": "15060",
            "discription": "Bikes For Sale",
            "icon": "fa fa-bicycle"

        },
        {
            "title": "14030",
            "discription": "Satisfied Customers",
            "icon": "fa fa-users"

        },
        {
            "title": "30",
            "discription": "Qualified Staff",
            "icon": "fa fa-user"

        },
    ]
    return (
        <div>   <section className="fun-facts-area ptb-80">
            <div className="container">
                <div className="row">
                    {funFactsAreaData.map((value, i) => {
                        return (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="fun-facts">
                                    <i className={value.icon} />
                                    <h2 className="count">{value.title}</h2>
                                    <span>{value.discription}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section></div>
    )
}

export default FunFactsArea