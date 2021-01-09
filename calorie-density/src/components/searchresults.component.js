import React from 'react'

const SearchResults = (props) => {
    const options = props.results.map(r => (
        <tr key={r._id} onClick={() => {
            var test = prompt("Please enter consumed " + r.fields.item_name
            + " amount in g!");
            alert(test);
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
                {r.fields.nf_calories}
            </td>
        </tr>
    ))
    return <table>{options}</table>

}

export default SearchResults