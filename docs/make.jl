# dependencies needed to build documentation
push!(LOAD_PATH, normpath(joinpath(@__FILE__, "../../src/")))

using Documenter, AdventOfCode

makedocs(
    sitename="Julia Advent of Code",
    authors = "Ludovic Tiako",
    pages = [
        "Home" => "index.md",
        "Solutions" => [
            "2018" => [
                "2018/day01.md",
                "2018/day02.md",
            ],
            "2019" => "2019.md",
        ]
    ]
)
