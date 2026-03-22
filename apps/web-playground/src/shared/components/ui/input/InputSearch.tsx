import { useState } from 'react';
import { ChevronDown, Filter, Search } from 'lucide-react';
import {
  ButtonGroup,
  ButtonGroupText,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupInput,
} from '@shared/components/ui';
import { useNavigate } from 'react-router-dom';

const FilterOptions = ['searchMonthly', 'searchConsult'];

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState<string[]>(FilterOptions);
  const [open, setOpen] = useState(false); // 모바일 전용: 검색창 열기 상태
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = keyword.trim();
    if (!query) return;

    const filterQuery = FilterOptions.map((f) => `${f}=${filter.includes(f) ? 1 : 0}`).join('&');

    setOpen(false);
    navigate(`/search?searchStr=${encodeURIComponent(query)}&${filterQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
      {/* 데스크탑 버전 */}
      <div className="hidden sm:grid w-full max-w-sm gap-6 min-w-xl">
        <ButtonGroup className="w-full">
          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <ButtonGroupText className="h-full rounded-tr-none rounded-br-none text-gray-200 bg-gray-500 hover:text-white transition">
                <span>Filter</span>
                <ChevronDown className="w-4 h-4" />
              </ButtonGroupText>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={4}>
              {FilterOptions?.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item}
                  checked={filter?.includes(item)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={(checked) =>
                    setFilter((prev) => (checked ? [...prev, item] : prev.filter((f) => f !== item)))
                  }
                >
                  {item.replace(/^search/, '')}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Input */}
          <InputGroup className="flex-1 bg-white text-gray-500">
            <InputGroupInput
              id="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
          </InputGroup>

          {/* Search Button */}
          <ButtonGroupText className="bg-gray-500 hover:bg-gray-600 transition flex p-0">
            <button
              type="submit"
              className="cursor-pointer text-white rounded px-3 py-1 flex items-center justify-center w-full h-full"
            >
              <Search className="w-4 h-4 text-gray-200" />
            </button>
          </ButtonGroupText>
        </ButtonGroup>
      </div>

      {/* 모바일 버전 */}
      <div className="relative sm:hidden">
        {/* 검색 아이콘 */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 rounded-md text-gray-200 hover:bg-gray-700 transition"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* 모바일 전체 오버레이 검색창 */}
        {open && (
          <div className="fixed top-16 left-0 w-screen h-[calc(100vh-4rem)] bg-white shadow-lg flex flex-col gap-4 z-50 p-4">
            <div className="flex items-center gap-2 w-full">
              {/* 필터 아이콘 */}
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                  <Filter className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={4} className="w-40">
                  {FilterOptions.map((item) => (
                    <DropdownMenuCheckboxItem
                      key={item}
                      checked={filter.includes(item)}
                      onSelect={(e) => e.preventDefault()}
                      onCheckedChange={(checked) =>
                        setFilter((prev) => (checked ? [...prev, item] : prev.filter((f) => f !== item)))
                      }
                    >
                      {item.replace(/^search/, '')}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 검색 input */}
              <InputGroup className="flex-1">
                <InputGroupInput
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="검색어를 입력하세요"
                  className="text-gray-700"
                />
              </InputGroup>

              {/* 검색 버튼 */}
              <button type="submit" className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
