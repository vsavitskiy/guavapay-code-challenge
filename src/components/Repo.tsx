import React, {useMemo} from "react";
import {randomColor} from "../utils/random";

type RepoProps = {
  name: string,
  stargazers_count: number,
  forks_count: number,
  size: number,
  clone_url: string,
  html_url: string,
  onCopy: (url: string) => void,
};

export const Repo: React.FC<RepoProps> = (props) => {
  const {name, stargazers_count, forks_count, size, clone_url, html_url, onCopy} = props;
  const bgColor = useMemo(randomColor, []);

  return (
    <div
      className="p-2 rounded-2xl shadow-lg shadow-gray-400 drop-shadow overflow-hidden"
      style={{ background: bgColor }}
    >
      <div className="font-bold mb-1">{name}</div>
      <div className="grid grid-cols-2">
        <div className="">Stars:</div>
        <div className="">{stargazers_count}</div>
        <div className="">Forks:</div>
        <div className="">{forks_count}</div>
        <div className="">Size:</div>
        <div className="">{size}</div>
      </div>

      <div className="flex gap-[4px] mt-[10px]">
        <button
          className="flex-1 leading-[36px] px-[20px] rounded bg-gray-700 text-white"
          onClick={() => onCopy(clone_url)}
        >
          Clone
        </button>

        <a
          className="flex-1 leading-[36px] px-[20px] rounded bg-gray-700 text-white text-center"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in GH
        </a>
      </div>
    </div>
  )
}
