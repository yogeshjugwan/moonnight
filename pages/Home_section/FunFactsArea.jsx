import React from 'react'

const FunFactsArea = () => {
    const funFactsAreaData = [
        {
            "title": "2",
            "discription": "Years in Business",
            "icon": "fa fa-calendar"

        },
        {
            "title": "972",
            "discription": "Bikes Sale",
            "icon": "fa fa-bicycle"

        },
        {
            "title": "956",
            "discription": "Satisfied Customers",
            "icon": "fa fa-users"

        },
        {
            "title": "16",
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