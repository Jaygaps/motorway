import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

import { fetchAllTags } from './utils/fetchAllTags';
import { fetchTag } from './utils/fetchTag';

import { Tags } from '../../types';

import './Task1.scss';

/** Note: Using something like Autocomplete library with react query / rtk query
 * fulfills the usage of auto filtering and caching.
 * For the purpose of this task, I will use a custom approach.
 * */

interface SearchItemsProps {
  /** Unique identifier for each tag */
  id: string;
  /** Name for each tag */
  name: Tags;
}

const maxSearchItems = 10;

const Task1: React.FC = () => {
  const [defaultSearchItems, setDefaultSearchItems] = useState<SearchItemsProps[]>();
  const [searchItems, setSearchItems] = useState<SearchItemsProps[]>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleFetchingAllTags = async () => {
      const allTags: SearchItemsProps[] = await fetchAllTags();

      setSearchItems(allTags);
      setDefaultSearchItems(allTags);
    };

    handleFetchingAllTags();
  }, []);

  const handleOnSearch = async (e) => {
    const value = e.target.value;
    const formatValue = value.toLowerCase();
    const filteredTags: SearchItemsProps[] = await fetchTag(formatValue);

    setSearchItems(filteredTags);
  };

  const handleTagSelection = (tag) => {
    setSearchParams(`?tag=${tag}`);
    setIsDropdownOpen(false);
  };

  const handleOnFocus = () => {
    setIsDropdownOpen(true);
  };

  const allItems = (searchItems?.length && searchItems) || defaultSearchItems;
  const filteredSearchItems = allItems?.slice(0, maxSearchItems);

  return (
    <div className="Task1">
      <div className="Task1-search">
        <input
          className="Task1-search--input"
          type="search"
          onChange={handleOnSearch}
          onFocus={handleOnFocus}
          placeholder="Red car"
        />

        {isDropdownOpen ? (
          <OutsideClickHandler onOutsideClick={() => setIsDropdownOpen(false)}>
            <ul className="Task1-search--dropdown">
              {filteredSearchItems.map((results) => (
                <li onClick={() => handleTagSelection(results.name)} key={results.id}>
                  {results.name}
                </li>
              ))}
            </ul>
          </OutsideClickHandler>
        ) : null}
      </div>
    </div>
  );
};

export default Task1;
