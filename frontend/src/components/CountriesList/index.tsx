import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generateCountries} from "../../services/countriesService";
import {SingleChoiceItem} from "../common/SingleChoiceList";
import {CountryModel} from "../../models/CountryModel";

const SingleChoiceList = React.lazy(() => import('../common/SingleChoiceList'));

function CountriesList() {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <SingleChoiceList
                initialValue="en"
                onLoad={generateCountries}
                renderItem={(item: CountryModel, value, setValue) => (
                    <SingleChoiceItem
                        label={item.label}
                        value={item.code}
                        selected={item.code === value}
                        onSelect={() => setValue(item.code)}
                    />
                )}
            />
        </Suspense>
    );
}

export default CountriesList;
