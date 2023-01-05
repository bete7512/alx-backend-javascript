#!/usr/bin/env python3
"""9-element_length.py"""


def element_length(lst: list) -> list:
    """Return a list of tuples with the length of each list element"""
    return [(i, len(i)) for i in lst]