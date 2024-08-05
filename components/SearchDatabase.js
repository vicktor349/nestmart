import React from 'react'
import supabase from '@/helpers/supabase'



const SearchDatabase = async (query) =>
{
    const allResults = []

    const tables = ['bestsellingproduct', 'fullproduct', 'products']

    for (let table of tables)
    {
        const { data, error } = await supabase
            .from(table)
            .select('*')
            .ilike('text', `%${query}%`)

        if (error)
        {
            console.error(`Error fetching data from ${table}:`, error)
            continue
        }

        if (data)
        {
            const resultsWithTable = data.map(item => ({ ...item, table }))
            allResults.push(...resultsWithTable)
        }
    }

    return allResults
}

export default SearchDatabase