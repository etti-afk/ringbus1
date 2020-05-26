

def create_track():
    ring1_spwn=[[[[0,0],[0,2]], [[0,0],[0,7]]], [[[0,2],[2,2]], [[0,7],[7,7]]], [[[2,2],[2,0]], [[7,7],[7,0]]], [[[2,0],[0,0]], [[7,0],[0,0]]]] 
    ring2_spwn=[[[[0,0],[0,2]], [[1,1],[1,6]]], [[[0,2],[2,2]], [[1,6],[6,6]]], [[[2,2],[2,0]], [[6,6],[6,1]]], [[[2,0],[0,0]], [[6,1],[1,1]]]] 
    ring3_spwn=[[[[0,0],[0,2]], [[2,2],[2,5]]], [[[0,2],[2,2]], [[2,5],[5,5]]], [[[2,2],[2,0]], [[5,5],[5,2]]], [[[2,0],[0,0]], [[5,2],[2,2]]]] 
    ring4_spwn=[[[[0,0],[0,1]], [[3,3],[3,3]]], [[[0,1],[1,1]], [[3,3],[3,3]]], [[[1,1],[2,1]], [[4,4],[4,4]]], [[[2,1],[2,2]], [[4,4],[4,4]]],
                [[[2,2],[1,2]], [[4,4],[4,4]]], [[[1,2],[1,1]], [[4,4],[4,4]]], [[[1,1],[1,0]], [[3,3],[3,3]]], [[[1,0],[0,0]], [[3,3],[3,3]]]] 
    ring5_spwn=[[[[2,0],[2,1]], [[4,3],[4,3]]], [[[2,1],[1,1]], [[4,3],[4,3]]], [[[1,1],[0,1]], [[3,4],[4,4]]], [[[0,1],[0,2]], [[3,4],[3,4]]],
                [[[0,2],[1,2]], [[3,4],[3,4]]], [[[1,2],[1,1]], [[3,4],[3,4]]], [[[1,1],[1,0]], [[4,3],[4,3]]], [[[1,0],[2,0]], [[4,3],[4,3]]]]
    ring6_spwn=[[[[0,0],[0,1]], [[4,4],[4,2]]], [[[0,1],[1,1]], [[4,2],[2,2]]], [[[1,1],[1,2]], [[5,5],[5,3]]], [[[1,2],[2,2]], [[5,3],[3,3]]],
                [[[2,2],[2,1]], [[3,3],[3,5]]], [[[2,1],[1,1]], [[3,5],[5,5]]], [[[1,1],[1,0]], [[2,2],[2,4]]], [[[1,0],[0,0]], [[2,4],[4,4]]]] 
    ring7_spwn=[[[[2,0],[2,1]], [[3,4],[3,2]]], [[[2,1],[1,1]], [[3,2],[5,2]]], [[[1,1],[1,2]], [[2,5],[2,3]]], [[[1,2],[0,2]], [[2,3],[4,3]]],
                [[[0,2],[0,1]], [[4,3],[4,5]]], [[[0,1],[1,1]], [[4,5],[2,5]]], [[[1,1],[1,0]], [[5,2],[5,4]]], [[[1,0],[2,0]], [[5,4],[3,4]]]]
    ring8_spwn=[[[[0,0],[0,1]], [[5,5],[5,1]]], [[[0,1],[2,1]], [[5,1],[2,1]]], [[[2,1],[2,0]], [[2,1],[2,5]]], [[[2,0],[0,0]], [[2,5],[5,5]]]] 
    ring9_spwn=[[[[0,1],[0,2]], [[5,6],[5,2]]], [[[0,2],[2,2]], [[5,2],[2,2]]], [[[2,2],[2,1]], [[2,2],[2,6]]], [[[2,1],[0,1]], [[2,6],[5,6]]]] 
    ringA_spwn=[[[[0,0],[0,2]], [[6,6],[6,1]]], [[[0,2],[1,2]], [[6,1],[1,1]]], [[[1,2],[1,0]], [[1,1],[1,6]]], [[[1,0],[0,0]], [[1,6],[6,6]]]] 
    ringB_spwn=[[[[1,0],[1,2]], [[6,6],[6,1]]], [[[1,2],[2,2]], [[6,1],[1,1]]], [[[2,2],[2,0]], [[1,1],[1,6]]], [[[2,0],[1,0]], [[1,6],[6,6]]]] 
    ringC_spwn=[[[[0,0],[0,1]], [[7,7],[7,0]]], [[[0,1],[1,1]], [[7,0],[0,0]]], [[[1,1],[1,0]], [[0,0],[0,7]]], [[[1,0],[0,0]], [[0,7],[7,7]]]]
    ringD_spwn=[[[[1,0],[1,1]], [[7,7],[7,0]]], [[[1,1],[2,1]], [[7,0],[0,0]]], [[[2,1],[2,0]], [[0,0],[0,7]]], [[[2,0],[1,0]], [[0,7],[7,7]]]]
    ringE_spwn=[[[[1,1],[1,2]], [[7,7],[7,0]]], [[[1,2],[2,2]], [[7,0],[0,0]]], [[[2,2],[2,1]], [[0,0],[0,7]]], [[[2,1],[1,1]], [[0,7],[7,7]]]]
    ringF_spwn=[[[[0,1],[0,2]], [[7,7],[7,0]]], [[[0,2],[1,2]], [[7,0],[0,0]]], [[[1,2],[1,1]], [[0,0],[0,7]]], [[[1,1],[0,1]], [[0,7],[7,7]]]]
#    track_list=[ring4_spwn, ring5_spwn, ring6_spwn, ring7_spwn]
    track_list=[ring1_spwn, ring2_spwn, ring3_spwn, ring4_spwn, ring5_spwn, ring6_spwn, ring7_spwn, ring8_spwn, ring9_spwn, ringA_spwn, ringB_spwn, ringC_spwn, ringD_spwn, ringE_spwn, ringF_spwn]
    return track_list

def renderpath(htmlfile, translate, crv_gap, pair_gap, span, gap, ring, ring_pair, ingress_line, ingress_pos, egress_line, egress_pos):
    if  (ring[-1][0][-2][0]<ring[0][0][1][0]):
        if (ring_pair==0):
            x_pair_affinity = pair_gap
            y_pair_affinity = 0
        elif (ring_pair==1):
            x_pair_affinity = 0
            y_pair_affinity = pair_gap
        x_begin=(span*ring[0][0][0][0])+(gap*ring[0][1][0][0]) - crv_gap
        y_begin=(span*ring[0][0][0][1])+(gap*ring[0][1][0][1]) + y_pair_affinity
        print('    <path id="ringpath{}_{}_{}_{}" transform="translate({}, {})" class="pathcolor" d="M 0,0  M {},{} '.format(ring_count+1, ring_pair, ingress, egress, translate, translate, x_begin, y_begin), file = htmlfile)
    else:
        if (ring_pair==0):
            x_pair_affinity = 0
            y_pair_affinity = 0
        elif (ring_pair==1):
            x_pair_affinity = pair_gap
            y_pair_affinity = pair_gap
        x_begin=(span*ring[0][0][0][0])+(gap*ring[0][1][0][0]) + crv_gap
        y_begin=(span*ring[0][0][0][1])+(gap*ring[0][1][0][1]) + y_pair_affinity
        print('    <path id="ringpath{}_{}" transform="translate({}, {})" class="pathcolor" d="M 0,0 M {},{} '.format(ring_count+1, ring_pair, translate, translate, x_begin, y_begin), file = htmlfile)
    for k, line in enumerate(ring): # lines of coordinates
        x_large_start = line[0][0][0]
        y_large_start = line[0][0][1]
        x_large_end   = line[0][1][0]
        y_large_end   = line[0][1][1]
        x_small_start = line[1][0][0]
        y_small_start = line[1][0][1]
        x_small_end   = line[1][1][0]
        y_small_end   = line[1][1][1]
        previous_lg_x = ring[k-1][0][-2][0] 
        previous_lg_y = ring[k-1][0][-2][1]
        previous_sm_x = ring[k-1][1][-1][0] 
        previous_sm_y = ring[k-1][1][-1][1]
        if (k==(len(ring)-1)):
            next_sm_x     = ring[0][1][0][0]
            next_sm_y     = ring[0][1][0][1]
            next_lg_x     = ring[0][0][1][0]
            next_lg_y     = ring[0][0][1][1]
        else:
            next_sm_x     = ring[k+1][1][0][0]
            next_sm_y     = ring[k+1][1][0][1]
            next_lg_x     = ring[k+1][0][1][0]
            next_lg_y     = ring[k+1][0][1][1]
#                print(' ringpath{}_{}  p_x={}, p_y={}, m_x={}, m_y={}, e_x={}, e_y={}'.format(ring_count+1, ring_pair, previous_lg_x, previous_lg_y, x_large_start, y_large_start, x_large_end, y_large_end)) 
        if   ((previous_lg_y==y_large_start) and (previous_lg_x>x_large_end) and (previous_lg_y<y_large_end)):             # left  then down
            if (y_pair_affinity == 0):
                x_pair_affinity = 0
            else:
                x_pair_affinity = pair_gap
            if ((previous_sm_x>x_small_start) and (previous_sm_y<y_small_start)):
                c_start_x  = l_end_x
                c_start_y  = l_end_y
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) + (crv_gap * 3)
                c_middle_x = c_end_x + 20
                c_middle_y = c_start_y + 20
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   - crv_gap
            else:
                c_start_x  = (span*x_large_start) + (gap*x_small_start) + crv_gap
                c_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) + crv_gap
                c_middle_x = c_end_x
                c_middle_y = c_start_y
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   - crv_gap
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_start) and (previous_lg_x<x_large_end) and (previous_lg_y<y_large_end)):             # down  then right
            if (x_pair_affinity==0):
                y_pair_affinity = pair_gap
            else:
                y_pair_affinity = 0 
            c_start_x  = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            c_start_y  = (span*y_large_start) + (gap*y_small_start) - crv_gap
            c_middle_x = c_start_x
            c_middle_y = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            c_end_x    = (span*x_large_start) + (gap*x_small_start) + crv_gap
            c_end_y    = c_middle_y
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            if ((x_small_end<next_sm_x) and (y_small_end<next_sm_y) and (y_large_end != next_lg_y)):
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   - (crv_gap * 3)
                l_end_y    = c_end_y
            else:
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   - crv_gap
                l_end_y    = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_y==y_large_start) and (previous_lg_x<x_large_end) and (previous_lg_y>y_large_end)):             # right then up
            if (y_pair_affinity==0):
                x_pair_affinity = 0
            else:
                x_pair_affinity = pair_gap 
            if ((previous_sm_x<x_small_start) and (previous_sm_y>y_small_start)):
                c_start_x  = l_end_x
                c_start_y  = l_end_y
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) - (crv_gap * 3)
                c_middle_x = c_end_x - 20
                c_middle_y = c_start_y - 20
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + crv_gap
            else:
                c_start_x  = (span*x_large_start) + (gap*x_small_start) - crv_gap
                c_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) - crv_gap
                c_middle_x = c_end_x
                c_middle_y = c_start_y
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + crv_gap
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_start) and (previous_lg_x>x_large_end) and (previous_lg_y>y_large_end)):             # up    then left
            if (x_pair_affinity==0):
                y_pair_affinity = pair_gap
            else:
                y_pair_affinity = 0
            c_middle_x = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            c_middle_y = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            c_start_x  = c_middle_x
            c_start_y  = (span*y_large_start) + (gap*y_small_start) + crv_gap
            c_end_x    = (span*x_large_start) + (gap*x_small_start) - crv_gap
            c_end_y    = c_middle_y
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            if ((x_small_end>next_sm_x) and (y_small_end>next_sm_y) and (y_large_end!=next_lg_y)):
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + (crv_gap * 3)
                l_end_y    = c_end_y
            else:
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + crv_gap
                l_end_y    = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_start) and (previous_lg_x>x_large_end) and (previous_lg_y<y_large_end)):             # down  then left
            if (x_pair_affinity==0):
                y_pair_affinity = 0
            else:
                y_pair_affinity = pair_gap
            c_middle_x = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            c_middle_y = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            c_start_x  = c_middle_x
            c_start_y  = (span*y_large_start) + (gap*y_small_start) - crv_gap
            c_end_x    = (span*x_large_start) + (gap*x_small_start) - crv_gap
            c_end_y    = c_middle_y
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            if ((x_small_end>next_sm_x) and (y_small_end<next_sm_y) and (y_large_end!=next_lg_y)):
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + (crv_gap * 3)
                l_end_y    = c_end_y
            else:
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + crv_gap
                l_end_y    = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_y==y_large_start) and (previous_lg_x<x_large_end) and (previous_lg_y<y_large_end)):             # right then down
            if (y_pair_affinity==0):
                x_pair_affinity = pair_gap
            else:
                x_pair_affinity = 0
            if ((previous_sm_x<x_small_start) and (previous_sm_y<y_small_start)):
                c_start_x  = l_end_x
                c_start_y  = l_end_y
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) + (crv_gap * 3)
                c_middle_x = c_end_x - 20
                c_middle_y = c_start_y + 20
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   - crv_gap
            else:
                c_start_x  = (span*x_large_start) + (gap*x_small_start) - crv_gap
                c_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) + crv_gap
                c_middle_x = c_end_x
                c_middle_y = c_start_y
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   - crv_gap
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_start) and (previous_lg_x<x_large_end) and (previous_lg_y>y_large_end)):             # up    then right
            if (x_pair_affinity==0):
                y_pair_affinity = 0
            else:
                y_pair_affinity = pair_gap
            c_middle_x = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            c_middle_y = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            c_start_x  = c_middle_x
            c_start_y  = (span*y_large_start) + (gap*y_small_start) + crv_gap
            c_end_x    = (span*x_large_start) + (gap*x_small_start) + crv_gap
            c_end_y    = c_middle_y
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            if ((x_small_end<next_sm_x) and (y_small_end>next_sm_y) and (y_large_end!=next_lg_y)):
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   - (crv_gap * 3)
                l_end_y    = c_end_y
            else:
                l_end_x    = (span*x_large_end)   + (gap*x_small_end)   - crv_gap
                l_end_y    = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_y==y_large_start) and (previous_lg_x>x_large_end) and (previous_lg_y>y_large_end)):             # left  then up
            if (y_pair_affinity==0):
                x_pair_affinity = pair_gap
            else:
                x_pair_affinity = 0
            if ((previous_sm_x>x_small_start) and (previous_sm_y>y_small_start)):
                c_start_x  = l_end_x
                c_start_y  = l_end_y
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) - (crv_gap * 3)
                c_middle_x = c_end_x + 20
                c_middle_y = c_start_y - 20
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + crv_gap
                c_number   = 1
            else:
                c_start_x  = (span*x_large_start) + (gap*x_small_start) + crv_gap
                c_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
                c_end_x    = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
                c_end_y    = (span*y_large_start) + (gap*y_small_start) - crv_gap
                c_middle_x = c_end_x
                c_middle_y = c_start_y
                l_end_x    = c_end_x
                l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + crv_gap
            l_start_x  = c_end_x
            l_start_y  = c_end_y
            print('        C {},{} {},{} {},{} '.format(c_start_x, c_start_y, c_middle_x, c_middle_y, c_end_x, c_end_y), file = htmlfile)
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x<x_large_end) and (previous_lg_y==y_large_end)):                                           # right horizontal
            l_start_x  = (span*x_large_start) + (gap*x_small_start) + crv_gap
            l_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            l_end_x    = (span*x_large_end)   + (gap*x_small_end)   - crv_gap
            l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + y_pair_affinity
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x>x_large_end) and (previous_lg_y==y_large_end)):                                           # left horizontal
            l_start_x  = (span*x_large_start) + (gap*x_small_start) - crv_gap
            l_start_y  = (span*y_large_start) + (gap*y_small_start) + y_pair_affinity
            l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + crv_gap
            l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + x_pair_affinity
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_end) and (previous_lg_y<y_large_end)):                                           # down vertical
            l_start_x  = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            l_start_y  = (span*y_large_start) + (gap*y_small_start) + crv_gap
            l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + x_pair_affinity
            l_end_y    = (span*y_large_end)   + (gap*y_small_end)   - crv_gap
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
        elif ((previous_lg_x==x_large_end) and (previous_lg_y>y_large_end)):                                           # up vertical
            l_start_x  = (span*x_large_start) + (gap*x_small_start) + x_pair_affinity
            l_start_y  = (span*y_large_start) + (gap*y_small_start) - crv_gap
            l_end_x    = (span*x_large_end)   + (gap*x_small_end)   + x_pair_affinity
            l_end_y    = (span*y_large_end)   + (gap*y_small_end)   + crv_gap
            print('        L {},{} {},{} '.format(l_start_x, l_start_y, l_end_x, l_end_y), file = htmlfile)
    print('  "/>', file = htmlfile)
    #print(' Z "/>', file = htmlfile)

#
