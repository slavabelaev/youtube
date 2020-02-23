import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generateLanguages} from "../../services/languagesService";
import {LanguageModel} from "../../models/LanguageModel";
import {SingleChoiceItem} from "../common/SingleChoiceList";

const SingleChoiceList = React.lazy(() => import('../common/SingleChoiceList'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <SingleChoiceList
            initialValue="en"
            onLoad={generateLanguages}
            renderItem={(item: LanguageModel, value, setValue) => (
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
