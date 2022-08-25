import React, {ReactNode, SyntheticEvent} from 'react';
import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../images/left-arrow.svg";

type LayoutProps = {
  showHeader?: boolean,
  pageHeader?: string,
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { showHeader = false, children, pageHeader } = props;
  const navigate = useNavigate();

  const handleBackButtonClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      {showHeader && (
        <header className="flex items-center px-5 shadow-md bg-gray-700 text-white">
            <a href="/" onClick={handleBackButtonClick} className="mr-2">
              <LeftArrow width={32} height={32} />
            </a>
          <h1 className="mx-auto leading-[50px]">{pageHeader}</h1>
        </header>
      )}

      <main>
        {children}
      </main>
    </div>
  );
}
