export default () => {
  const [searchParams, setSearchParams] = useState<SearchParamsType>(defaultSearchParams);
  const [sortingParams, setSortingParams] = useState<SortingParamsType>(defaultSortingParams);
  const [list, setList] = useState<any[]>([]);
  const [paginationParams, setPaginationParams] =
    useState<PaginationParamsType>(defaultPaginationParams);

  return {
    searchParams,
    setSearchParams,
    sortingParams,
    setSortingParams,
    list,
    setList,
    paginationParams,
    setPaginationParams,
  };
};
