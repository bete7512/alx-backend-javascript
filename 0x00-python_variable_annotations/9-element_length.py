#!/usr/bin/env python3
"""9-element_length.py"""


def element_length(lst):
    """Return a list of tuples with the length of each element"""
    return [(i, len(i)) for i in lst]
