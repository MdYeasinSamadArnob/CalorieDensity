import React from 'react'

const SearchResults = (props) => {
    const options = props.results.map(r => (

        <tr key={r._id} onClick={() => {
           props.func(r.fields.nf_calories, r.fields.item_name)
        }
        }
        >
            <td>
                {r.fields.item_name}
            </td>
            <td>
                {r.fields.brand_name}
            </td>
            <td>
                {r.fields.nf_calories} kcal / {r.fields.nf_serving_weight_grams}g
            </td>
        </tr>
    ))
    return <table>{options}</table>

}

export default SearchResults